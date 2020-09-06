using System;
using System.Collections.Generic;
using System.Linq;

namespace SimpleExamples
{
    public class EntryPoint
    {
        static void Main()
        {
            string sentence = "I love cats";
            string[] catNames = { "Lucky", "Bella", "Luna", "Oreo", "Simba", "Toby", "Loki", "Oscar" };
            int[] numbers = { 5, 6, 3, 2, 1, 5, 6, 7, 8, 4, 234, 54, 14, 653, 3, 4, 5, 6, 7 };
            //D:\CSharp MasterClass\LINQ\01. BasicLinqQueries\01. SimpleExamples
            //! Basic syntax
            //* from ... in ...

            var result = from number in numbers  //+ here numbers is the source.
                         select number //+ In this case it will return all the items

            //! Where
            var result = from number in numbers
                         where number < 5          //+ where condition can be used after the from
                         select number

            //! Return type of linq
            //* Return type of linq is IEnumerable and we cannot use indexers result[0]
            //* IEnumerable make it possible to do foreach. LIST implement IEnumerable interface. whatever can use Foreach should implement the IEnumerable, but we cannot use for loop

            var resultCats = from cat in catNames
                             where (cat.contains('a')) && (cat.length < 4) //+ we can use multiple conditions and better to use brackets
                             orderby cat descending  //+ we use sorting by orderby and mention the sorting order, ascending is default
                             select cat

            //% we can write it in different where as well
            var resultCats = from cat in catNames
                             where cat.contains('a')
                             where cat.length < 4
                             orderby cat descending
                             select cat

            //D:\CSharp MasterClass\LINQ\01. BasicLinqQueries\02. ObjectExamples\EntryPoint.cs
            List<Person> people = new List<Person>()
            {
                new Person("Tod", 180, 70, Gender.Male),
                new Person("John", 170, 88, Gender.Male),
                new Person("Anna", 150, 48, Gender.Female),
                new Person("Kyle", 164, 77, Gender.Male),
                new Person("Anna", 164, 77, Gender.Male),
                new Person("Maria", 160, 55, Gender.Female),
                new Person("John", 160, 55, Gender.Female)
            };
            //% for extracting the data from the list of objects
            var fourCharPeople = from p in people
                                 where p.Name.length == 4
                                 orderby  p.Name, p.Height   //+ we can give multiple conditions in the orderby. orderby  p.Name descending , p.Height descending
                                 select p.name;       //+ here we are only selecting the name, so the output will be IEnumerable of string


            List<Person> people = new List<Person>()
            {
                new Person("Tod", "Vachev", 1, 180, 26, Gender.Male),
                new Person("John", "Johnson", 2, 170, 21, Gender.Male),
                new Person("Anna", "Maria", 3, 150, 22, Gender.Female),
                new Person("Kyle", "Wilson", 4, 164, 29, Gender.Male),
                new Person("Anna", "Williams", 5, 164, 28, Gender.Male),
                new Person("Maria", "Ann", 6, 160, 43, Gender.Female),
                new Person("John", "Jones", 7, 160, 37, Gender.Female),
                new Person("Samba", "TheLion", 8, 175, 33, Gender.Male),
                new Person("Aaron", "Myers", 9, 182, 21, Gender.Male),
                new Person("Aby", "Wood", 10, 165, 20, Gender.Female),
                new Person("Maddie","Lewis",  11, 160, 19, Gender.Female),
                new Person("Lara", "Croft", 12, 162, 18, Gender.Female)
            };

            //! returning anonymous object
            var youngerPersons = from p in people
                                 where p.age < 25
                                 orderby p.age
                                 select new { Name = p.Name, Age = p.Age } //+ Here we are creating an anonymous object using a new keyword, we have to name the properties as well
            foreach (var youngPerson in youngPersons)
            {
                System.Console.WriteLine($"Name: {youngPerson.Name}, Age: {youngPerson.Age}");  //+ we can use the properties of anonymous object here.
            }

            //% It is not necessary to mention the property name in  anonymous object because, it wil take the same name from the coming object
            var youngerPersons = from p in people
                                 where p.age < 25
                                 orderby p.age
                                 select new { p.Name, p.Age } //+ Not necessary to use the property
            foreach (var youngPerson in youngPersons)
            {
                System.Console.WriteLine($"Name: {youngPerson.FirstName}, Age: {youngPerson.Age}");  //+ we can use the properties of anonymous object here.
            }

            //% if we have an existing class, we can use it witout using the anonymous objects

            List<YoungPerson> youngerPersons = from p in people
                                 where p.age < 25
                                 orderby p.age
                                 select new YoungPerson{ Name = p.Name, Age = p.Age } //+ Here we used the existing class and mapped to its properties
            foreach (var youngPerson in youngPersons)
            {
                System.Console.WriteLine($"Name: {youngPerson.Name}, Age: {youngPerson.Age}");
            }
        }
    }
}
