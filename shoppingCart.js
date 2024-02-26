const shoppingCart = {
    items: [],
    total: 0,
  
    addItem: function(name, price, quantity) {
      const newItem = { name, price, quantity };
      this.items.push(newItem);
      this.total += price * quantity;
    },
  
    removeItem: function(name) {
      const indexToRemove = this.items.findIndex(item => item.name === name);
      if (indexToRemove !== -1) {
        const removedItem = this.items.splice(indexToRemove, 1)[0];
        this.total -= removedItem.price * removedItem.quantity;
      }
    },
  
    updateQuantity: function(name, newQuantity) {
      const itemToUpdate = this.items.find(item => item.name === name);
      if (itemToUpdate) {
        const priceDiff = (newQuantity - itemToUpdate.quantity) * itemToUpdate.price;
        itemToUpdate.quantity = newQuantity;
        this.total += priceDiff;
      }
    },
  
    calculateTotal: function() {
      this.total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  
    clearCart: function() {
      this.items = [];
      this.total = 0;
    },
  
    applyDiscount: function(discountCode) {
      this.total *= 0.9;
    },
  };
  
  