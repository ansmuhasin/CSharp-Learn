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
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/fields

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

//+ when we pass a variable to another method or copy to another variable, ehat really happens is, it will copy the stack variable in stack and give another name.
//+ so for stack variable, it will be exactly copying the value itself, for referance variable it will copy the referance from stack.(basically, whatever in the stack, it will get copied from stack and put it in a new variable)
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
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods
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


//!Nested Types
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/nested-types

//! polymorphysm
//+  if the base class and derived class having methods with same name and different signature. then it will be a overloading. if the name is same and signature is same,
//+ then the derived class will hide the base class methord, we can add a new keyword as well. 
//+ if we put virtual and override keyword, then it will be overridibg, 
//+ override and new will behave differently, if we create a object of derived class and upcast to base class and call the base class method
//+ in overriding , even if we call the base class methord, it is will still gonn call the overrided method from the derived class.
//+ in new keyword, it will call the base class method itself.
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/polymorphism

//! OverLoading
https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/member-overloading

//!overriding
//+ we can call the virtual base method by using base keyword.
//+ will not support private keyword in virtual
https://emids.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/learn/lecture/2243584#questions
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/override
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/polymorphism

//! sealed keyword
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/sealed

//! static keyword
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-classes-and-static-class-members
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/static
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-classes-and-static-class-members

//! singleton class
https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ff650316(v=pandp.10)?redirectedfrom=MSDN

//! partial classes
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods

//!abstract
//+ abstract classes can contain non abstract members as well as fields.
//+ non abstract class should not have any abstract members.
//+ we cannot use sealed with abstract class or members.
//+ we cannot use virtual as well, because it already a abstract member by default.
//+ we can have override abstract members in abstract class(we can skip the implementation and forward it to next derived class)

//! Interfaces
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/#:~:text=An%20interface%20is%20typically%20like,can't%20be%20instantiated%20directly.
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface
https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/interfaces
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/interface-properties
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/explicit-interface-implementationx
//+ if we have members with same name in multiple implemented interfaces, then we should use explicit implementation in classes to avoid confution.
//+ if a method with same signature and name exists in both the interfaces, and if we dont do a expliicit implimentTION , then calling both interface member will map to same implimentation in the classes
//+ if different members can exists with same name in different interface, and we moight need to do an explicit implimentaion.
//+ after c# 8, default implementation is possible, which cannot be calle from the inherited class object. it can only be called from the instance of the interface.
https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/interface
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/how-to-explicitly-implement-interface-members
//+ interfaces are kind of contracts, we can isolate the dependancy between a class using intefaces. if in the futuer we make changes in the depending classes, it will make changes
//+ lot of problems. but using interfaces we can avoid that. and if two entity have same functionality and different implimentaion. we can use iinterfaces. and we can reduce the dependancy between classes using interfaces
//+ if we have a log functionality that i am still logging to SQL. if i use a class object for this functionality and if some other point of time, if i want to change 
//+ the logging to text or mongo, i need to rewrite the class, this will create a huge change. instead we can use interfaces and we can create new classes and impliment the interfacese
//+ when we have new requierement. so the client of our functionality is do not know about the classes. it onlynknow the interface, and the classes will serve the functionality, there is no depenmdancy bw classses, client doesnt know about any classes, it only know the interfaces and there is no dependancy.
//+ and we can send list of interfaces and we can foreach and call methods in different classes.

//! Properties
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/value
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/auto-implemented-properties
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-implement-a-lightweight-class-with-auto-implemented-properties
https://docs.microsoft.com/en-us/dotnet/csharp/properties

//!Object and collection initializer
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers

//! indexers
//+ cannot be static
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/

//! Structs
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/
//+ we cannot create a static struct. but we can create static members inside of strruct
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/structs
https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/struct


//! constants
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constants#:~:text=Constants%20are%20immutable%20values%20which,may%20be%20declared%20as%20const%20.

//! Enums
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/enums

//!ref 
//+ when we send a variable as re, what exactly it does is, it will give access the originl variable, it will not create a new variable and pass referance. it actually give access to original value
https://www.wintellect.com/ref-keyword-for-reference-types/
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/ref
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/passing-reference-type-parameters
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/passing-parameters

//! out
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/out-parameter-modifier

//! Boxing and unboxing
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing

//! exceptions
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/exceptions/
https://docs.microsoft.com/en-us/dotnet/standard/exceptions/best-practices-for-exceptions
https://docs.microsoft.com/en-us/dotnet/standard/exceptions/how-to-create-localized-exception-messages

//! .net framework 
//! CTS, CLS
https://docs.microsoft.com/en-us/dotnet/standard/common-type-system#more-resources

//!CLR
https://docs.microsoft.com/en-us/dotnet/standard/clr
//! Assemblies
https://docs.microsoft.com/en-us/dotnet/standard/assembly/

//! Garbage collection
https://docs.microsoft.com/en-us/dotnet/standard/automatic-memory-management
https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/

//! Finalizers or destructors
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/destructors

//! Dispoaible
https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/using-objects

//! topics skipped - non generic collections

//! Generics
https://docs.microsoft.com/en-us/dotnet/standard/generics/
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/new-constraint

//! List<T>
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netcore-3.1

//!Dictionary<T, T>
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=netcore-3.1

//! collection<T>
https://docs.microsoft.com/en-us/dotnet/api/system.collections.objectmodel.collection-1?view=netcore-3.1
https://stackoverflow.com/questions/419914/when-to-use-collectiont-vs-listt

//! Delegates
https://www.youtube.com/watch?v=D8PyJyI4kb4
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/
https://docs.microsoft.com/en-us/dotnet/csharp/delegates-overview
//+ Type safe function pointers, it will going to hold the referance of the method.
//+ 3 steps involved, Declaring a delegate(A delegate return type as well as the input parameters should be same as the method, name can be different,and add a delegate keyword, name can be anything.)
//+ Initialize a delegate(delegate is atype, we can declare it in a namespace or inside a class, it sould be initialized and need to pass a method name as a parameter.)
//+ invoke a delegate (pass the input parameters to the delegate and invoke the method.)
//+ while using multicast delegates, it is better not to use return type other than void.

//! Anonymous method
//+ declared using a delegate keyword, it will contain a body directly but it will not have name and access modifiers, not suggested,
//+ advantage is lesser typing

//! Lambda expression
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions
//! Func action and predicate

//! events
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/events/#:~:text=Events%20enable%20a%20class%20or,the%20event%20are%20called%20subscribers.
https://www.youtube.com/watch?v=jQgwEsJISy0
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/event
https://docs.microsoft.com/en-us/dotnet/csharp/events-overview

//! Nullable types
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types

//! Extention methods
https://www.youtube.com/watch?v=Hhoo6PxK4jQ
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods

//! Attributes
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/#:~:text=Attributes%20provide%20a%20powerful%20method,using%20a%20technique%20called%20reflection.











//! LINQ expression
https://docs.microsoft.com/en-us/dotnet/csharp/linq/
