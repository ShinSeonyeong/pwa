using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace conapp01
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //int는 6,553,535까지 표현 가능
            long b = 36165432165465L;
            int a = (int)b; // 복사

            Console.WriteLine(a);
            Console.WriteLine(b);

            int c = 4455111;
            long d = c;

            long e = 5465599999999554L;
            int f = (int)e;

            AA aa = new AA();
            BB bb = new BB();

            aa.Test();
            bb.Test();

            AA ab = new BB(); // 업캐스팅
            ab.Test();
        }
    }

    class AA
    {
        public virtual void Test()
        {
            Console.WriteLine("AA 클래스의 Test 메서드");
        }
    }

    class BB : AA
    {
        public override void Test()
        {
            Console.WriteLine("BB클래스의 Test 메서드");
        }
    }
}
