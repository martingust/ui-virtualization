System.register([], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);

          this.objectArray = [];
          this.objectArray2 = [];
          this.numberOfItems = 100;
          this.isSelected = false;
          this.isVisible = true;
          this.viewStrategy = 'div';
        }

        _createClass(App, [{
          key: 'setViewStrategy',
          value: function setViewStrategy(strategy) {
            this.viewStrategy = strategy;
          }
        }, {
          key: 'toggle',
          value: function toggle() {
            this.isVisible = !this.isVisible;
          }
        }, {
          key: 'click',
          value: function click() {
            console.log('click');
          }
        }, {
          key: 'setIsSelected',
          value: function setIsSelected() {
            this.isSelected = true;
          }
        }, {
          key: 'createItem',
          value: function createItem(index) {
            var name = faker.name.findName();
            return {
              firstLetter: name.charAt(0),
              name: index + ' ' + name,
              color: faker.internet.color(),

              phone: faker.phone.phoneNumber(),
              country: faker.address.country()
            };
          }
        }, {
          key: 'activate',
          value: function activate() {
            var name;
            for (var i = 0; i < this.numberOfItems; ++i) {
              name = faker.name.findName();
              this.objectArray.push(this.createItem(i));
            }

            for (var i = 0; i < this.numberOfItems; ++i) {
              name = faker.name.findName();
              this.objectArray2.push(this.createItem());
            }
          }
        }, {
          key: 'swap',
          value: function swap() {
            this.objectArray = this.objectArray2;
          }
        }, {
          key: 'addItems',
          value: function addItems(count) {
            for (var i = 0; i < count; ++i) {
              this.objectArray.push(this.createItem(i));
              console.log(i);
            }

            this.numberOfItems = this.objectArray.length;
          }
        }, {
          key: 'addItem2',
          value: function addItem2() {
            var item = this.createItem();
            this.objectArray.splice(1, 0, item);
          }
        }, {
          key: 'addItemFirst',
          value: function addItemFirst() {
            this.objectArray.unshift(this.createItem());
          }
        }, {
          key: 'removeItems',
          value: function removeItems(count) {
            this.objectArray.splice(0, count);
          }
        }, {
          key: 'unshift5',
          value: function unshift5() {
            this.objectArray.unshift(this.createItem(), this.createItem(), this.createItem(), this.createItem(), this.createItem());
          }
        }, {
          key: 'addItemLast',
          value: function addItemLast() {
            this.objectArray.push(this.createItem());
          }
        }, {
          key: 'removeLast',
          value: function removeLast() {
            this.objectArray.pop();
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUMsVUFBVSxFQUFFLENBQUM7QUFDN0IsZ0JBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDckM7OztpQkFFVyx3QkFBRTtBQUNaLGdCQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztXQUM3Qzs7O2lCQUVVLHFCQUFDLEtBQUssRUFBQztBQUNoQixnQkFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1dBQ25DOzs7aUJBRU8sb0JBQUU7QUFDUixnQkFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1dBQ3JIOzs7aUJBRVUsdUJBQUU7QUFDWCxnQkFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7V0FDMUM7OztpQkFFUyxzQkFBRztBQUNYLGdCQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1dBQ3hCOzs7ZUF4RlEsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMub2JqZWN0QXJyYXkgPSBbXTtcbiAgICAgIHRoaXMub2JqZWN0QXJyYXkyID0gW107XG4gICAgICB0aGlzLm51bWJlck9mSXRlbXMgPSAxMDA7XG4gICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gJ2Rpdic7XG4gICAgfVxuXG4gICAgc2V0Vmlld1N0cmF0ZWd5KHN0cmF0ZWd5KXtcbiAgICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgdGhpcy5pc1Zpc2libGUgPSAhdGhpcy5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgY2xpY2soKXtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgIH1cblxuICAgIHNldElzU2VsZWN0ZWQoKXtcbiAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY3JlYXRlSXRlbShpbmRleCl7XG4gICAgICB2YXIgbmFtZSA9IGZha2VyLm5hbWUuZmluZE5hbWUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpcnN0TGV0dGVyOiBuYW1lLmNoYXJBdCgwKSxcbiAgICAgICAgbmFtZTogaW5kZXggKyAnICcgKyBuYW1lLFxuICAgICAgICBjb2xvcjogZmFrZXIuaW50ZXJuZXQuY29sb3IoKSxcbiAgICAgICAgLy9pbWFnZTogZmFrZXIuaW1hZ2UuYXZhdGFyKCksXG4gICAgICAgIC8vZW1haWw6IGZha2VyLmludGVybmV0LmVtYWlsKCksXG4gICAgICAgIHBob25lOiBmYWtlci5waG9uZS5waG9uZU51bWJlcigpLFxuICAgICAgICBjb3VudHJ5OiBmYWtlci5hZGRyZXNzLmNvdW50cnkoKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpe1xuICAgICAgdmFyIG5hbWU7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZJdGVtczsgKytpKSB7XG4gICAgICAgIG5hbWUgPSBmYWtlci5uYW1lLmZpbmROYW1lKCk7XG4gICAgICAgIHRoaXMub2JqZWN0QXJyYXkucHVzaCh0aGlzLmNyZWF0ZUl0ZW0oaSkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZJdGVtczsgKytpKSB7XG4gICAgICAgIG5hbWUgPSBmYWtlci5uYW1lLmZpbmROYW1lKCk7XG4gICAgICAgIHRoaXMub2JqZWN0QXJyYXkyLnB1c2godGhpcy5jcmVhdGVJdGVtKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3YXAoKXtcbiAgICAgIHRoaXMub2JqZWN0QXJyYXkgPSB0aGlzLm9iamVjdEFycmF5MjtcbiAgICB9XG5cbiAgICBhZGRJdGVtcyhjb3VudCl7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgdGhpcy5vYmplY3RBcnJheS5wdXNoKHRoaXMuY3JlYXRlSXRlbShpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm51bWJlck9mSXRlbXMgPSB0aGlzLm9iamVjdEFycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBhZGRJdGVtMigpe1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0oKTtcbiAgICAgIHRoaXMub2JqZWN0QXJyYXkuc3BsaWNlKDEsIDAsIGl0ZW0pO1xuICAgIH1cblxuICAgIGFkZEl0ZW1GaXJzdCgpe1xuICAgICAgdGhpcy5vYmplY3RBcnJheS51bnNoaWZ0KHRoaXMuY3JlYXRlSXRlbSgpKTtcbiAgICB9XG5cbiAgICByZW1vdmVJdGVtcyhjb3VudCl7XG4gICAgICB0aGlzLm9iamVjdEFycmF5LnNwbGljZSgwLCBjb3VudCk7XG4gICAgfVxuXG4gICAgdW5zaGlmdDUoKXtcbiAgICAgIHRoaXMub2JqZWN0QXJyYXkudW5zaGlmdCh0aGlzLmNyZWF0ZUl0ZW0oKSx0aGlzLmNyZWF0ZUl0ZW0oKSx0aGlzLmNyZWF0ZUl0ZW0oKSx0aGlzLmNyZWF0ZUl0ZW0oKSx0aGlzLmNyZWF0ZUl0ZW0oKSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbUxhc3QoKXtcbiAgICAgIHRoaXMub2JqZWN0QXJyYXkucHVzaCh0aGlzLmNyZWF0ZUl0ZW0oKSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGFzdCgpIHtcbiAgICAgIHRoaXMub2JqZWN0QXJyYXkucG9wKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
