// Follow along with the examples here

function sayHelloTo(firstName) {console.log(`Hello, ${firstName}!`);}

sayHelloTo('Mr. Stark');
sayHelloTo('Captain Rogers');
sayHelloTo('Agent Romanov');

function say(greeting, firstName) {console.log(`${greeting}, ${firstName}!`);}
say("Wanda", "Welcome home")

function say(greeting, firstName) {
    console.log('I am Captain America');
    return `${greeting}, ${firstName}!`;
}
    console.log(say("John", "Walker"));  