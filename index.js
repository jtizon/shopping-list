function checkItems() {
  $('.shopping-list').on('click', 
  '.shopping-item-toggle', function(event) {
    const targetItem = $(event.currentTarget);
    $(targetItem).closest('li').find(".shopping-item").toggleClass('shopping-item__checked');
  });
}

$(checkItems);

function deleteItems() {
  $('.shopping-list').on('click', 
  '.shopping-item-delete', function(event) {
    const targetItem = $(event.currentTarget);
    $(targetItem).closest('li').remove();
  });
}

$(deleteItems);

function addItems(){
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    const entry = $(".shopping-list-entry").val();
    $(".shopping-list-entry").val(" ");
    $(".shopping-list").append(
      `<li>
          <span class="shopping-item">${entry}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
  }); 
}

$(addItems());
