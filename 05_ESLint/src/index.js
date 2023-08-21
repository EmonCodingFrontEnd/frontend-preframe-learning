let a = 1;
// delete a;
try {
    console.log(a);
} catch (error) {}

const ref = new WeakRef({ name: "daotin" });
let obj = ref.deref();
if (obj) {
    console.log(obj.name); // daotin
}
