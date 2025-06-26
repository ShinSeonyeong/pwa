using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace winform
{
    public partial class Form1 : Form
    {
        int num = 10; // 클래스가 만들어질 때 변수가 생성됨.
        public Form1() //생성자
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            num = num + 1;
            num++;
            Console.WriteLine(num);
            Console.WriteLine($"textbox1.Text={textBox1.Text}");
            //textBox1.Text가 비어있지 않으면 
            if(textBox1.Text != "")
            {
                int textboxvalue = int.Parse(textBox1.Text);
                textBox1.Text = ""; //textBox1의 값을 지움
            }
            else
            {
                label2.Text = num.ToString(); //textBox1의 값을 지움
            }
            label2.Text = num.ToString();
        }

        private void label2_Click(object sender, EventArgs e)
        {
            Console.WriteLine("출력");
        }
    }
}