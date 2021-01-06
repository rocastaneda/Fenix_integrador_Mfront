export class Stack<T> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }

  public push(element: T, recursive?: boolean) {
    //if we pass the recursive argument, we have to pass an array with data instead of a single value
    if (recursive) {
      if (typeof element === 'object') {
        const arrayOfItems: any = element;

        for (const item of arrayOfItems) {
          this.items.push(item);
        }
      } else {
        console.error(
          'you have passed the recursive parameter, remember to pass an iterable(array or object) with the data as the first parameter instead of a single value'
        );
      }
    } else {
      this.items.push(element);
    }
  }

  public pop() {
    //returns the top most element in the stack and remove it.
    //if the stack is empty and we try to pop it, we will get an error
    if (this.items.length === 0) {
      console.error('warning, stack underflow');
    }

    return this.items.pop();
  }

  public peek() {
    //returns the top most element in the stack wihtout removing it.
    return this.items[this.items.length - 1];
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public getStack() {
    return this.items;
  }
}
