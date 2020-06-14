using System;
using System.Linq;

namespace ArraySum
{
    public class ArrayMaxSumCounters
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Write the number of charecters of the array");
            string inputArrayLength = Console.ReadLine();
            Console.WriteLine("Write the values in array with a space between");
            string inputUserReadValues = Console.ReadLine();
            var inputArray = inputUserReadValues.Split(' ').Select(int.Parse).ToArray();
            int maxSum = 0;
            ArrayCondition arrayCondition = new ArrayCondition();
            for (int i = 0; i < Convert.ToInt32(inputArrayLength); i++)
            {
                int localSum = 0;
                for (int j = i; j < Convert.ToInt32(inputArrayLength); j++)
                {
                    localSum += inputArray[j];
                    if (localSum > maxSum)
                    {
                        maxSum = localSum;
                        arrayCondition.InitialPostion = i;
                        arrayCondition.FinalPosition = j;
                    }
                }
            }
            string output = "";
            for (int i = arrayCondition.InitialPostion; i <= arrayCondition.FinalPosition; i++)
            {
                output = output + " " + Convert.ToInt32(inputArray[i]);
            }
            Console.WriteLine("output is " + output);
            Console.ReadLine();
        }
    }

    public class ArrayCondition
    {
        public int InitialPostion { get; set; }
        public int FinalPosition { get; set; }
    }
}