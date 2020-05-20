//! Variables
//+ Variables represent storage locations. Every variable has a type that determines what values can be stored in the variable. C# is a type-safe language, and the C# compiler guarantees that values stored in variables are always of the appropriate type.
//+ C# defines seven categories of variables: static variables, instance variables, array elements, value parameters, reference parameters, output parameters, and local variables.
//+ A field declared with the static modifier is called a static variable. 
//+ A field declared without the static modifier is called an instance variable.
//+ The elements of an array come into existence when an array instance is created
//+ A parameter declared without a ref or out modifier is a value parameter.
//+ A parameter declared with a ref modifier is a reference parameter.
//+ A parameter declared with an out modifier is an output parameter.
//+ A local variable is declared by a local_variable_declaration, which may occur in a block, a for_statement, a switch_statement or a using_statement; or by a foreach_statement or a specific_catch_clause for a try_statement.

https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/variables

https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/

//! DataTypes 
//+ There are two kinds of types in C#: value types and reference types. Variables of value types directly contain their data whereas variables of reference types
//+  store references to their data, the latter being known as objects. With reference types, it's possible for two variables to reference the same object and 
//+ thus possible for operations on one variable to affect the object referenced by the other variable. With value types, the variables each have their own copy 
//+ of the data, and it isn't possible for operations on one to affect the other 
//+ C#'s value types are further divided into simple types, enum types, struct types, and nullable value types.
//+ C#'s reference types are further divided into class types, interface types, array types, and delegate types.

//% Value types
//%     Simple types
//%         Signed integral: sbyte, short, int, long
//%         Unsigned integral: byte, ushort, uint, ulong
//%         Unicode characters: char
//%         IEEE binary floating-point: float, double
//%         High-precision decimal floating-point: decimal
//%         Boolean: bool
//%     Enum types
//%         User-defined types of the form enum E {...}
//%     Struct types
//%         User-defined types of the form struct S {...}
//%     Nullable value types
//%         Extensions of all other value types with a null value
//%     Tuple value types
//%         User-defined types of the form (T1, T2, ...)
//% Reference types
//%     Class types
//%         Ultimate base class of all other types: object
//%         Unicode strings: string
//%         User-defined types of the form class C {...}
//%     Interface types
//%         User-defined types of the form interface I {...}
//%     Array types
//%         Single- and multi-dimensional, for example, int[] and int[,]
//%     Delegate types
//%         User-defined types of the form delegate int D(...)
https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/types-and-variables

//+ Variables represent storage locations. Every variable has a type that determines what values can be stored in the variable. C# is a type-safe language, 
//+ and the C# compiler guarantees that values stored in variables are always of the appropriate type
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/variables
//! Data Types and casting
https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/ms228360(v=vs.90)?redirectedfrom=MSDN
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions

//! Classes and objects
//+ A class is a data structure that combines state (fields) and actions (methods and other function members) in a single unit. 
//+ A method is a member that implements a computation or action that can be performed by an object or class. Static methods are accessed through the class. Instance methods are accessed through instances of the class.
//+ 
https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/classes-and-objects

//! Memory management
https://www.c-sharpcorner.com/article/C-Sharp-heaping-vs-stacking-in-net-part-i/

//! Iteration statements
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do

//! Arrays
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/
//+ in multi dimentional arrays - inner array length will be at the end , int[,] array2D = int[3,2] {{1,2},{3,2},{4,5}}

//! String
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/
https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netcore-3.1

//! OOPS
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/object-oriented-programming

//! Constructors
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constructors
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/using-constructors

//! readonly 
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/readonly
https://www.geeksforgeeks.org/difference-between-readonly-and-const-keyword-in-c-sharp/

//! class coupling and loose coupling
https://social.msdn.microsoft.com/Forums/en-US/c747f40a-7091-4f59-98b1-c637814d275b/cnet-what-is-the-exact-meaning-of-loose-coupling?forum=netfxbcl
https://emids.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/learn/lecture/2243552#questions

//! Composition
https://stackify.com/oop-concepts-composition/
https://www.c-sharpcorner.com/article/difference-between-composition-and-aggregation/
//+ composition is used to reduce tight coupling of the classes. used for having looslly coupled classes.
//+ we can inherit a very basic and common functionality in inheritance, for human, dog, duck, fish, eagle have common behaviurs like sleeping as well as eating. 
//+ humans , dog and duck can walk, but others can't. so we should not put those functions inside the base class. for that we can create anew class calle walkable and we can initialize it 
//+ and we can use that class(or class) inside human dog and duck class. we can initialize it at the beginning and we can use it's functions.
//+ duck and fish can swim, so we can create a new swimmable class(class) and use it inside these class. and for bird we can create a fly class and use it only for duck and eagle.
//+ so, we use the inheritance for only very basic common functionality, but for other functionalities, we can create class or class we can use it. this reduce the dependancy between classes

//! Encapsulation
https://www.geeksforgeeks.org/c-sharp-encapsulation/
//+ grouping relate members to a common place.
//+ Encapsulation is more like giving a shield or security to the class states or fields, if we have a class with some fields, we do not need to let the other classes use those fields,
//+ we can protect those fields by using access modifiers, and we can show some details of the fields using properties or methods.
//! Abstraction
//+ Abstraction and abstract class are different things.
//+ Abstraction is showing the requered details to the outside., It can be something like C# .Net library classes. that the implimentations are hidden.
//+ In other way, it can be something like, 
//+ if we have functionality to add record to db when user gives input, we create a class and we have a class variable and 3 functions. Validate, OPenConnection, and Add. 
//+ when the consuming class uses this class. it need to insert the record to this object, the call validate function, the opnconnection function. then add function. but the consumer 
//+ consumer class does not need to know about validate and openconnection function. It only need to know about Add function. so, we can put those 2 function inside the Add function
//+ and don't need to show it outside. in this we we are only showing requered details instead of implimentayion details, we are giving only necessary informations to the outside.
//+ Abstraction is exposing what a function do, instead of exposing how a function do.

//! Inheritance 
//+ Structs do not support inheritance, but they can implement interfaces. For more information
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/inheritance
https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/inheritance

//! DownCasting and Upcasting

//+ n some reference type conversions, the compiler cannot determine whether a cast will be valid. It is possible for a cast operation that compiles correctly to fail at run time. 
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions
https://stackoverflow.com/questions/1524197/downcast-and-upcast

//! is and as keyword
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/type-testing-and-cast

//! new keyword 
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/knowing-when-to-use-override-and-new-keywords

//! this
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/this

//! namespaces
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/
https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/names-of-namespaces
https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-1.1/893ke618(v=vs.71)?redirectedfrom=MSDN
//! Assembly
//+ is a single unit of deployment 
//+ pre cumoiled .Net code which can be run by CLR
//+ .exe have irs own memory space while running. we can run multiple times and each time it will start the program.
//+ dll run inside other memory space. it need some other program to invoke it and run in its memory space. needs a hoster or invoker --reusability

//! Access modifiers
//+ Interface members are public by default because the purpose of an interface is to enable other types to access a class or struct.
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/access-modifiers
//+ Enumeration members are always public, and no access modifiers can be applied.
//+ Access modifiers are not allowed on namespaces. Namespaces have no access restrictions.

//! base keyword
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/base


















https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/expressions#the-as-operator