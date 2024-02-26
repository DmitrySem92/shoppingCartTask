const shoppingCart = {
    items: [],
    total: 0,
  
    // Метод добавления товара
    addItem: function(name, price, quantity) {
      const newItem = { name, price, quantity };
      this.items.push(newItem);
      this.total += price * quantity;
    },
  
    // Метод удаления товара
    removeItem: function(name) {
      const indexToRemove = this.items.findIndex(item => item.name === name);
      if (indexToRemove !== -1) {
        const removedItem = this.items.splice(indexToRemove, 1)[0];
        this.total -= removedItem.price * removedItem.quantity;
      }
    },
  
    // Метод обновления количества товара
    updateQuantity: function(name, newQuantity) {
      const itemToUpdate = this.items.find(item => item.name === name);
      if (itemToUpdate) {
        const priceDiff = (newQuantity - itemToUpdate.quantity) * itemToUpdate.price;
        itemToUpdate.quantity = newQuantity;
        this.total += priceDiff;
      }
    },
  
    // Метод расчета общей стоимости
    calculateTotal: function() {
      this.total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  
    // Метод очистки корзины
    clearCart: function() {
      this.items = [];
      this.total = 0;
    },
  
    // Дополнительное задание: метод применения скидки
    applyDiscount: function(discountCode) {
      // Логика применения скидки
      // В данном примере просто уменьшим total на 10%
      this.total *= 0.9;
    },
  };  