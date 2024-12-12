var w: unknown = 1; 
w = "string";

w = { 
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  } 
} as { runANonExistentMethod: () => void };

if (
  typeof w === 'object' &&
  w !== null &&
  'runANonExistentMethod' in w &&
  typeof (w as { runANonExistentMethod: Function }).runANonExistentMethod === 'function'
) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
