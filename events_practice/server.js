const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) {
    super();
    this.tasks = {};
    this.taskId = 1;
    process.nextTick(() => this.emit('response', 'Type a command (help to list all commands)'));
    client.on('command', (command, args) => {
      console.log(`Command: ${command}`);
      //help, add, ls, delete
      switch(command) {
        case 'help':
        case 'add':
        case 'ls':
        case 'delete':
          this[command](args);
          break;
        default:
          this.emit('response', 'unknown command');
      }
    });
  }

  tasksString() {
    return Object.keys(this.tasks).map(key => (
      `${key}: ${this.tasks[key]}`
    )).join('\n');
  }

  help() {
    this.emit('response', `Available Commands:
    add
    ls
    delete`
    );
  }
  add(args) {
    this.tasks[this.taskId] = args.join(' ');
    this.emit('response', `Added task ${this.taskId}`);
    this.taskId++;
  }
  ls() {
    this.emit('response', `Tasks:\n${this.tasksString()}`);
  }
  delete(args) {
    delete(this.tasks[args[0]]);
    this.emit('response', `Deleted task ${args[0]}`);
  }

}

module.exports = client => new Server(client);