using System;
using System.IO;
using System.Net;

namespace ClassLibrary
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            WebClient client = new WebClient();
            string reply = client.DownloadString("http://msdn.microsoft.com");

            Console.WriteLine(reply);
            try
            {
                File.WriteAllText("WriteFile.txt", reply);
            }
            catch(IOException e)
            {
                Console.WriteLine(e.Message);
            }
            Console.ReadLine();
        }
    }
}
