// buffer deal with binary data
const buff = Buffer.alloc(5);
// console.log(buff);

buff.write("Hello");
console.log(buff);
console.log(buff.toString());

const buff1 = Buffer.from("hi");
console.log(buff1);

const buff2 = Buffer.from("Buffers");
buff2.fill("NewValue");
console.log(buff2.toString());
console.log(Buffer.byteLength(buff2));
