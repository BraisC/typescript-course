/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    hookEl && (hookEl.innerHTML = template);
    hookEl && (hookEl.querySelector('h1')!.textContent = p.name);
  };
}

@Logger('Logging - Person')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person {
  name: string;

  constructor() {
    this.name = 'Max';
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
