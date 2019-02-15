using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Exercises
{
    class Birthday
    {

        public static Dictionary<string, int> birthday = new Dictionary<string, int>()
        {
            { "january", 1 },{"february",2},{"march", 3},{"april",4},{"may",5},{"june",6},{"july",7},{"august",8},
            {"september",9},{"october",10},{"november",11},{"december",12}
        };

        public void ExecutingExercise()
        {
            GettingTimeSinceBirth(GettingYearOfBirth(), GettingMonthOfBirth(), GettingDayOfBirth());
        }

        private int GettingYearOfBirth()
        {
            int year = 0;
            try
            {
                Console.Write("Please enter your year of birth: ");
                year = Convert.ToInt32(Console.ReadLine());
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                GettingYearOfBirth();
            }
            return year;
        }

        private int GettingMonthOfBirth()
        {
            int birthMonth = 0;
            try
            {
                Console.Write("Please enter your month of birth: ");
                var month = Console.ReadLine();
                if (Regex.IsMatch(month, @"^[a-zA-Z]+$"))
                {
                    if (birthday.ContainsKey(month))
                    {
                        int result;
                        birthday.TryGetValue(month, out result);
                        birthMonth = result;
                    }
                }
                else
                {
                    birthMonth = Convert.ToInt32(month);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                GettingMonthOfBirth();
            }
            return birthMonth;
        }

        private int GettingDayOfBirth()
        {
            int day = 0;
            bool gotDay = false;
            while(gotDay == false)
            {
                try
                {
                    Console.Write("Please enter your day of birth: ");
                    day = Convert.ToInt32(Console.ReadLine());
                    gotDay = true;
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }

            return day;
        }

        private void GettingTimeSinceBirth(int year, int month, int day)
        {
            try
            {
                Console.WriteLine($"{year}, {month}, {day}");
                DateTime birthday = new DateTime(year, month, day);
                TimeSpan daysSinceBirth = DateTime.Now.Subtract(birthday);
                Console.WriteLine("Total days since birth: {0} \nTotal hours since birth: {1} \nTotal minutes since birth: {2} \nTotal seconds since birth: {3}",
                 Math.Round(daysSinceBirth.TotalDays, 0), Math.Round(daysSinceBirth.TotalHours, 0), Math.Round(daysSinceBirth.TotalMinutes, 0), Math.Round(daysSinceBirth.TotalSeconds, 0));
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                ExecutingExercise();
            }
        }
    }
}
