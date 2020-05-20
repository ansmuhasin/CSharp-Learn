using System;

namespace TicTacToeGame
{
    public class Program
    {
        static string[,] ticTacToeInitialContainer = new string[3, 3] { { "1", "2", "3" }, { "4", "5", "6" }, { "7", "8", "9" } };
        public static int playerNumber = 1;
        public static bool hasWonGame = false;
        public static void Main(string[] args)
        {
            while (!hasWonGame)
            {
                PrintGameScreen(ticTacToeInitialContainer, playerNumber);
                hasWonGame = UpdateUserInput(playerNumber == 1 ? "X" : "O");
                if (!hasWonGame)
                {
                    playerNumber = playerNumber == 1 ? 2 : 1;
                }
            }
            PrintGameScreen(ticTacToeInitialContainer, playerNumber);
            Console.WriteLine("Player {0} is WON", playerNumber);
            Console.ReadLine();
            Console.WriteLine("Enter to restart");

        }
        public static bool UpdateUserInput(string playerMarker)
        {
            int userInput = int.Parse(Console.ReadLine());
            int userInputInArrayPosition = userInput - 1;
            int rowPosition;
            int columnPosition;
            if (userInputInArrayPosition == 0)
            {
                rowPosition = 0;
                columnPosition = 0;
            }
            else
            {
                rowPosition = (userInputInArrayPosition % 3);
                columnPosition = userInputInArrayPosition / 3;
            }
            if (ticTacToeInitialContainer[columnPosition, rowPosition] == "X" || ticTacToeInitialContainer[columnPosition, rowPosition] == "O")
            {
                Console.WriteLine("That position is already selected. please select another position");
                Console.WriteLine();
            }
            else
            {
                ticTacToeInitialContainer[columnPosition, rowPosition] = playerMarker;
            }
            return hasWonGame(userInput, columnPosition, rowPosition);
        }

        public static bool hasWonGame(int userInput, int columnPosition, int rowPosition)
        {
            bool hasWon = false;
            string playerPoint = playerNumber == 1 ? "X" : "O";
            for (int i = 0; i < 3; i++)
            {
                if (ticTacToeInitialContainer[columnPosition, i] != playerPoint)
                {
                    hasWon = false;
                    break;
                }
                hasWon = true;
            }

            if (!hasWon)
            {
                for (int i = 0; i < 3; i++)
                {
                    if (ticTacToeInitialContainer[i, rowPosition] != playerPoint)
                    {
                        hasWon = false;
                        break;
                    }
                    hasWon = true;
                }
            }

            if (!hasWon && userInput % 2 != 0)
            {
                if (userInput == 1 || userInput == 5 || userInput == 9)
                {
                    for (int i = 0; i < 3; i++)
                    {
                        if (ticTacToeInitialContainer[i, i] != playerPoint)
                        {
                            hasWon = false;
                            break;
                        }
                        hasWon = true;
                    }
                }
                else if (userInput == 3 || userInput == 5 || userInput == 7)
                {
                    for (int i = 0; i < 3; i++)
                    {
                        for (int j = 2; j >= 0; j--)
                        {
                            if (ticTacToeInitialContainer[i, j] != playerPoint)
                            {
                                hasWon = false;
                                break;
                            }
                            if (ticTacToeInitialContainer[j, i] != playerPoint)
                            {
                                hasWon = false;
                                break;
                            }
                            hasWon = true;
                        }
                        if (ticTacToeInitialContainer[i, i] != playerPoint)
                        {
                            hasWon = false;
                            break;
                        }
                        hasWon = true;
                    }
                }
            }

            return hasWon;
        }

        public static void PrintGameScreen(string[,] inputArray, int playerNumber)
        {
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.Write("| " + inputArray[i, j] + " |");
                }
                Console.WriteLine("");
                Console.WriteLine("---------------");
            }
            Console.WriteLine("Player {0}: Select a position", playerNumber.ToString());
        }
    }
}
