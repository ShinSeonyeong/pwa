using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 여기가 프로그램 시작점이다.
            // 콘솔 앱, winform 앱
            Console.WriteLine("안녕하세요");

            int a = 10;
            a += 20;

            string c = a + "aaa";
            Console.WriteLine("a = " + a);
            Console.WriteLine("c = " + c);
            Console.WriteLine(57 < 278);
            Console.WriteLine(57 > 278);

            bool isTrue = true;
            bool isFalse = 30 < 20;
            Console.WriteLine(isTrue);
            Console.WriteLine(isFalse);
        }
    }
}
