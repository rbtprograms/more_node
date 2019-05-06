//exports.id = ;; this adds onto the module.exports object

//module.exports.id = ;; this replaces the module.exports object
//require wraps modules in functions, __filename and __dirname give aboslute paths

//arguments
//this is in node and can be used in a module

if(require.main === module) {
  //this means this file is being run as a script
  console.log(process.argv[2], process.argv[3])
} else {
  //it is being required by another file
}

//node caches requires so multiple requires won't take as long