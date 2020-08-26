using System;
namespace TestingSyntax
{
    public class LetsTest
    {
        int[] arr = new int[10];
        string[] str = new string[10];
        float[] f = new float[10];
        public int this[int index]
        {
            get { return arr[index]; }
            set { arr[index] = value; }
        }
        public string this[int index]
        {
            get => str[index];
            set => str[index] = value;
        }
        public float this[int index] => f[index];
    }
}