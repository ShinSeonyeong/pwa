using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chap02
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("안녕");
            Console.WriteLine(32.GetType());
            Console.WriteLine(129L.GetType());

            Console.WriteLine(3.14f.GetType());
            Console.WriteLine(3.14.GetType());

            Console.WriteLine(true.GetType());
            Console.WriteLine("안녕".GetType());
            Console.WriteLine("A".GetType());
            Console.WriteLine("안녕".Length); // 문자열의 길이
            Console.WriteLine("asdf".ToUpper()); // 문자열을 대문자로 변환
            Console.WriteLine("asdsAAD".ToLower()); // 문자열을 소문자로 변환
            Console.WriteLine("안녕".Substring(1)); // 문자열의 일부를 추출

            int a = 10;
            double b = 3.14;

            string c = "안녕하세요";
            bool d = true;
            char e = 'a';
            var f = 100;
            Console.WriteLine(f.GetType());
        }
    }
}
