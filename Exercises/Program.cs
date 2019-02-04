using System;

namespace Exercises
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("hello");
            Console.WriteLine("Name trick");
            NameTrick();
            Console.WriteLine("Age trick");
            IfStatement();
            Console.WriteLine("Square game");
            ForLoop();
            Console.WriteLine("String Manipulation");
            StringManipulation("    Hey i am Daniel here are few unused spaces and lots of a   ");
            Console.WriteLine("Second ex");
            Birthday birthday = new Birthday();
            birthday.ExecutingExercise();
            Console.ReadLine();
        }

        public static void NameTrick()
        {
            Console.Write("Please enter your name: ");
            string name = Console.ReadLine();
            Console.WriteLine(name + ", you are really cool!");
        }

        public static void IfStatement()
        {
            Console.Write("Please write your age: ");
            int age = Convert.ToInt32(Console.ReadLine());
            string message = (age <= 40) ? "You are young!" : "You are not young anymore!";
            Console.WriteLine("You entered {0} and {1}", age, message);
        }

        public static void ForLoop()
        {
            Console.Write("How big square you want? ");
            int squareSize = Convert.ToInt32(Console.ReadLine());
            for (int i = 0; i < squareSize; i++)
            {
                for (int j = 1; j < squareSize; j++)
                {
                    Console.Write("x");
                }
                Console.WriteLine("x");
            }
        }

        public static void StringManipulation(string sentence)
        {
            Console.WriteLine("Short sentence: {0} \nSentence without unneccesary spaces: {1} \nSentence with all \"a\" replaced with \"0\": {2} \n Sentence" +
                "length: {3}", sentence.Substring(0, 10).Trim(), sentence.Trim(), sentence.Replace('a', '0').Trim(), sentence.Length);
        }

    }
}
