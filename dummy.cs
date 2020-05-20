namespace Name
{
    class Name
    {
        static void Main()
        {
            int totalScore = 0;
            int totalSubjects = 0;
            do
            {
                Console.WriteLine("Please Enter a the score between 0 and 20. Press -1 to finish");
                string currentScore = Console.ReadLine();
                int integerCurrentScore = Convert.ToInt32(currentScore);
                if (integerCurrentScore >= 0 && integerCurrentScore <= 20)
                {
                    totalSubjects += integerCurrentScore;
                totalSubjects++;
                }
                else
                {
                    Console.WriteLine("Score should be between 0 and 20.");
                }
            }
            while (integerCurrentScore == -1);
        }
    }
}