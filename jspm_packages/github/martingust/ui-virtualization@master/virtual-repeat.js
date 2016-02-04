/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', 'aurelia-templating-resources/repeat-utilities', 'aurelia-templating-resources/analyze-view-factory', './utilities', './virtual-repeat-strategy-locator', './view-strategy'], function (exports, _aureliaDependencyInjection, _aureliaBinding, _aureliaTemplating, _aureliaTemplatingResourcesRepeatUtilities, _aureliaTemplatingResourcesAnalyzeViewFactory, _utilities, _virtualRepeatStrategyLocator, _viewStrategy) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var VirtualRepeat = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(VirtualRepeat, [{
      key: 'items',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'local',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function VirtualRepeat(element, viewFactory, instruction, viewSlot, observerLocator, strategyLocator, viewStrategyLocator) {
      _classCallCheck(this, _VirtualRepeat);

      this._first = 0;
      this._previousFirst = 0;
      this._viewsLength = 0;
      this._lastRebind = 0;
      this._topBufferHeight = 0;
      this._bottomBufferHeight = 0;
      this._bufferSize = 5;
      this._scrollingDown = false;
      this._scrollingUp = false;
      this._switchedDirection = false;
      this._isAttached = false;

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'local', _instanceInitializers);

      this.element = element;
      this.viewFactory = viewFactory;
      this.instruction = instruction;
      this.viewSlot = viewSlot;
      this.observerLocator = observerLocator;
      this.strategyLocator = strategyLocator;
      this.viewStrategyLocator = viewStrategyLocator;
      this.local = 'item';
      this.sourceExpression = _aureliaTemplatingResourcesRepeatUtilities.getItemsSourceExpression(this.instruction, 'virtual-repeat.for');
      this.isOneTime = _aureliaTemplatingResourcesRepeatUtilities.isOneTime(this.sourceExpression);
      this.viewsRequireLifecycle = _aureliaTemplatingResourcesAnalyzeViewFactory.viewsRequireLifecycle(viewFactory);
    }

    VirtualRepeat.prototype.attached = function attached() {
      this._isAttached = true;
      var element = this.element;
      this.viewStrategy = this.viewStrategyLocator.getStrategy(element);
      this.scrollList = this.viewStrategy.getScrollList(element);
      this.scrollContainer = this.viewStrategy.getScrollContainer(element);
      this.topBuffer = this.viewStrategy.createTopBufferElement(this.scrollList, element);
      this.bottomBuffer = this.viewStrategy.createBottomBufferElement(this.scrollList, element);
      this.itemsChanged();
      this._handleScroll();
    };

    VirtualRepeat.prototype.bind = function bind(bindingContext, overrideContext) {
      var _this = this;

      this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };

      window.onresize = function () {
        _this._handleResize();
      };
    };

    VirtualRepeat.prototype.call = function call(context, changes) {
      this[context](this.items, changes);
    };

    VirtualRepeat.prototype.detached = function detached() {
      this.viewStrategy.removeBufferElements(this.scrollList, this.topBuffer, this.bottomBuffer);
      this._isAttached = false;
      this.scrollList = null;
      this.scrollContainer = null;
      this._viewsLength = null;
      this.scrollContainerHeight = null;
      this._first = null;
      this._previousFirst = null;
      this.viewSlot.removeAll(true);
      if (this.scrollHandler) {
        this.scrollHandler.dispose();
      }
      this._unsubscribeCollection();
    };

    VirtualRepeat.prototype.itemsChanged = function itemsChanged() {
      this._unsubscribeCollection();

      if (!this.scope) {
        return;
      }

      var items = this.items;
      this.strategy = this.strategyLocator.getStrategy(items);
      this.strategy.createFirstItem(this);
      this._calcInitialHeights();

      if (!this.isOneTime && !this._observeInnerCollection()) {
        this._observeCollection();
      }

      this.strategy.instanceChanged(this, items, this._viewsLength);
    };

    VirtualRepeat.prototype.unbind = function unbind() {
      this.scope = null;
      this.items = null;
    };

    VirtualRepeat.prototype.handleCollectionMutated = function handleCollectionMutated(collection, changes) {
      this.strategy.instanceMutated(this, collection, changes);
    };

    VirtualRepeat.prototype.handleInnerCollectionMutated = function handleInnerCollectionMutated(collection, changes) {
      var _this2 = this;

      if (this.ignoreMutation) {
        return;
      }
      this.ignoreMutation = true;
      var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
      this.observerLocator.taskQueue.queueMicroTask(function () {
        return _this2.ignoreMutation = false;
      });

      if (newItems === this.items) {
        this.itemsChanged();
      } else {
        this.items = newItems;
      }
    };

    VirtualRepeat.prototype._handleScroll = function _handleScroll() {
      var _this3 = this;

      if (!this._isAttached) {
        return;
      }

      var itemHeight = this.itemHeight;
      var scrollTop = this.scrollContainer.scrollTop;
      this._first = Math.floor(scrollTop / itemHeight);
      this._checkScrolling();

      if (this._isScrolling && this._scrollingDown && (this._hasScrolledDownTheBuffer() || this._switchedDirection && this._hasScrolledDownTheBufferFromTop())) {
        var viewsToMove = this._first - this._lastRebind;
        if (this._switchedDirection) {
          viewsToMove = this.isAtTop ? this._first : this._bufferSize - (this._lastRebind - this._first);
        }
        this.isAtTop = false;
        this._lastRebind = this._first;
        var movedViewsCount = this._moveViews(viewsToMove);
        var adjustHeight = movedViewsCount < viewsToMove ? this._bottomBufferHeight : itemHeight * movedViewsCount;
        this._switchedDirection = false;
        this._topBufferHeight = this._topBufferHeight + adjustHeight;
        this._bottomBufferHeight = this._bottomBufferHeight - adjustHeight;
        if (this._bottomBufferHeight >= 0) {
          this._adjustBufferHeights();
        }
      } else if (this._isScrolling && this._scrollingUp && (this._hasScrolledUpTheBuffer() || this._switchedDirection && this._hasScrolledUpTheBufferFromBottom())) {
          var viewsToMove = this._lastRebind - this._first;
          if (this._switchedDirection) {
            if (this.isLastIndex) {
              viewsToMove = this.items.length - this._first - this.elementsInView;
            } else {
              viewsToMove = this._bufferSize - (this._first - this._lastRebind);
            }
          }
          this.isLastIndex = false;
          this._lastRebind = this._first;
          var movedViewsCount = this._moveViews(viewsToMove);
          this.movedViewsCount = movedViewsCount;
          var adjustHeight = movedViewsCount < viewsToMove ? this._topBufferHeight : itemHeight * movedViewsCount;
          this._switchedDirection = false;
          this._topBufferHeight = this._topBufferHeight - adjustHeight;
          this._bottomBufferHeight = this._bottomBufferHeight + adjustHeight;
          if (this._topBufferHeight >= 0) {
            this._adjustBufferHeights();
          }
        }
      this._previousFirst = this._first;

      requestAnimationFrame(function () {
        return _this3._handleScroll();
      });
    };

    VirtualRepeat.prototype._handleResize = function _handleResize() {
      var children = this.viewSlot.children,
          childrenLength = children.length,
          overrideContext,
          view,
          addIndex;

      this.scrollContainerHeight = _utilities.calcScrollHeight(this.scrollContainer);
      this._viewsLength = Math.ceil(this.scrollContainerHeight / this.itemHeight) + 1;

      if (this._viewsLength > childrenLength) {
        addIndex = children[childrenLength - 1].overrideContext.$index + 1;
        overrideContext = _aureliaTemplatingResourcesRepeatUtilities.createFullOverrideContext(this, this.items[addIndex], addIndex, this.items.length);
        view = this.viewFactory.create();
        view.bind(overrideContext.bindingContext, overrideContext);
        this.viewSlot.insert(childrenLength, view);
      } else if (this._viewsLength < childrenLength) {
        this._viewsLength = childrenLength;
      }
    };

    VirtualRepeat.prototype._checkScrolling = function _checkScrolling() {
      if (this._first > this._previousFirst && (this._bottomBufferHeight > 0 || !this.isLastIndex)) {
        if (!this._scrollingDown) {
          this._scrollingDown = true;
          this._scrollingUp = false;
          this._switchedDirection = true;
        } else {
          this._switchedDirection = false;
        }
        this._isScrolling = true;
      } else if (this._first < this._previousFirst && (this._topBufferHeight >= 0 || !this.isAtTop)) {
        if (!this._scrollingUp) {
          this._scrollingDown = false;
          this._scrollingUp = true;
          this._switchedDirection = true;
        } else {
          this._switchedDirection = false;
        }
        this._isScrolling = true;
      } else {
        this._isScrolling = false;
      }
    };

    VirtualRepeat.prototype._hasScrolledDownTheBuffer = function _hasScrolledDownTheBuffer() {
      return this._first - this._lastRebind >= this._bufferSize;
    };

    VirtualRepeat.prototype._hasScrolledDownTheBufferFromTop = function _hasScrolledDownTheBufferFromTop() {
      return this._first - this._bufferSize > 0;
    };

    VirtualRepeat.prototype._hasScrolledUpTheBuffer = function _hasScrolledUpTheBuffer() {
      return this._lastRebind - this._first >= this._bufferSize;
    };

    VirtualRepeat.prototype._hasScrolledUpTheBufferFromBottom = function _hasScrolledUpTheBufferFromBottom() {
      return this._first + this._bufferSize < this.items.length;
    };

    VirtualRepeat.prototype._adjustBufferHeights = function _adjustBufferHeights() {
      this.topBuffer.setAttribute('style', 'height:  ' + this._topBufferHeight + 'px');
      this.bottomBuffer.setAttribute("style", 'height: ' + this._bottomBufferHeight + 'px');
    };

    VirtualRepeat.prototype._unsubscribeCollection = function _unsubscribeCollection() {
      if (this.collectionObserver) {
        this.collectionObserver.unsubscribe(this.callContext, this);
        this.collectionObserver = null;
        this.callContext = null;
      }
    };

    VirtualRepeat.prototype._moveViews = function _moveViews(length) {
      var _this4 = this;

      var getNextIndex = this._scrollingDown ? function (index, i) {
        return index + i;
      } : function (index, i) {
        return index - i;
      };
      var isAtFirstOrLastIndex = function isAtFirstOrLastIndex() {
        return _this4._scrollingDown ? _this4.isLastIndex : _this4.isAtTop;
      };
      var viewSlot = this.viewSlot;
      var childrenLength = viewSlot.children.length;
      var viewIndex = this._scrollingDown ? 0 : childrenLength - 1;
      var items = this.items;
      var scrollList = this.scrollList;
      var index = this._scrollingDown ? this._getIndexOfLastView() + 1 : this._getIndexOfFirstView() - 1;
      var i = 0;
      while (i < length && !isAtFirstOrLastIndex()) {
        var view = viewSlot.children[viewIndex];
        var nextIndex = getNextIndex(index, i);
        _aureliaTemplatingResourcesRepeatUtilities.updateOverrideContext(view.overrideContext, nextIndex, items.length);
        view.bindingContext[this.local] = items[nextIndex];
        if (this._scrollingDown) {
          viewSlot.children.push(viewSlot.children.shift());
          this.viewStrategy.moveViewLast(view, scrollList, childrenLength);
          this.isLastIndex = nextIndex >= items.length - 1;
        } else {
          viewSlot.children.unshift(viewSlot.children.splice(-1, 1)[0]);
          this.viewStrategy.moveViewFirst(view, scrollList);
          this.isAtTop = nextIndex <= 0;
        }
        i++;
      }
      return length - (length - i);
    };

    VirtualRepeat.prototype._getIndexOfLastView = function _getIndexOfLastView() {
      var children = this.viewSlot.children;
      return children[children.length - 1].overrideContext.$index;
    };

    VirtualRepeat.prototype._getIndexOfFirstView = function _getIndexOfFirstView() {
      var children = this.viewSlot.children;
      return children[0].overrideContext.$index;
    };

    VirtualRepeat.prototype._calcInitialHeights = function _calcInitialHeights() {
      if (this._viewsLength > 0) {
        return;
      }
      var listItems = this.scrollList.children;
      this.itemHeight = _utilities.calcOuterHeight(listItems[1]);
      this.scrollContainerHeight = _utilities.calcScrollHeight(this.scrollContainer);
      this.elementsInView = Math.ceil(this.scrollContainerHeight / this.itemHeight) + 1;
      this._viewsLength = this.elementsInView * 2 + this._bufferSize;
      this._bottomBufferHeight = this.itemHeight * this.items.length - this.itemHeight * this._viewsLength;
      this.bottomBuffer.setAttribute("style", 'height: ' + this._bottomBufferHeight + 'px');
    };

    VirtualRepeat.prototype._observeInnerCollection = function _observeInnerCollection() {
      var items = this._getInnerCollection();
      var strategy = this.strategyLocator.getStrategy(items);
      if (!strategy) {
        return false;
      }
      this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
      if (!this.collectionObserver) {
        return false;
      }
      this.callContext = 'handleInnerCollectionMutated';
      this.collectionObserver.subscribe(this.callContext, this);
      return true;
    };

    VirtualRepeat.prototype._getInnerCollection = function _getInnerCollection() {
      var expression = _aureliaTemplatingResourcesRepeatUtilities.unwrapExpression(this.sourceExpression);
      if (!expression) {
        return null;
      }
      return expression.evaluate(this.scope, null);
    };

    VirtualRepeat.prototype._observeCollection = function _observeCollection() {
      var items = this.items;
      this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
      if (this.collectionObserver) {
        this.callContext = 'handleCollectionMutated';
        this.collectionObserver.subscribe(this.callContext, this);
      }
    };

    var _VirtualRepeat = VirtualRepeat;
    VirtualRepeat = _aureliaDependencyInjection.inject(Element, _aureliaTemplating.BoundViewFactory, _aureliaTemplating.TargetInstruction, _aureliaTemplating.ViewSlot, _aureliaBinding.ObserverLocator, _virtualRepeatStrategyLocator.VirtualRepeatStrategyLocator, _viewStrategy.ViewStrategyLocator)(VirtualRepeat) || VirtualRepeat;
    VirtualRepeat = _aureliaTemplating.templateController(VirtualRepeat) || VirtualRepeat;
    VirtualRepeat = _aureliaTemplating.customAttribute('virtual-repeat')(VirtualRepeat) || VirtualRepeat;
    return VirtualRepeat;
  })();

  exports.VirtualRepeat = VirtualRepeat;
});