import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    price(discount: number): number {
        let priceSum: number = 0;
        this.items.forEach((e) => {
            priceSum = priceSum + e.price
        });
        return discount < 1 && discount > 0 ? priceSum - priceSum * Number(discount) : priceSum;
    }

    delete(id: number): void {
      this.items.forEach((e) => {
        if (e.id === id) {
          this._items.splice(this.items.indexOf(e), 1);
        }
      });
    }

}
