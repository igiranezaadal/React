
// conditional type
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

// The Conditional Type:
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

// Usage:
function createLabel<T extends number | string>(value: T): NameOrId<T> {
//   throw "Implementation ignored"
if (typeof value === "number") {
    return { id: value }; // ❌ Error: Type '{ id: number; }' is not assignable to type 'NameOrId<T>'
  }
  return { name: value };  // ❌ Error: Type '{ name: string; }' is not assignable to type 'NameOrId<T>'
}

let a = createLabel("typescript"); 
// Type of 'a' is automatically resolved to: NameLabel

let b = createLabel(42);           
// Type of 'b' is automatically resolved to: IdLabel