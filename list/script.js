(function () {
  class MyList extends HTMLElement {
    connectedCallback() {
      var myList = this;
      myList.innerHTML = '<ul>';
      /*myList.getAttribute('items').split(',').forEach(function (item) {
        myList.innerHTML += '<li onclick="getNumber(' + item + ')">' + item + '</li>';
      });*/

      var src = myList.getAttribute('src');
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var items = JSON.parse(xhttp.responseText);
            items.forEach(function(item) {
              myList.innerHTML += '<li>' + item.title + '</li>';
            });
          }
      };
      xhttp.open("GET", src, true);
      xhttp.send();

      myList.innerHTML += '</ul>';
    }
  }

  window.customElements.define('my-list', MyList);
})();

function getNumber(num) {
  //console.log(num);
}