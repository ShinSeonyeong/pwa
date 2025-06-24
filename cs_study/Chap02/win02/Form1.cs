using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace win02
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            MessageBox.Show(textBox1.Text,"첫번째 수");
            MessageBox.Show(textBox2.Text, "두번째 수");

            int num1 = int.Parse(textBox1.Text);
            int num2 = int.Parse(textBox2.Text);

            int a = 10;
            Console.WriteLine($"\"a={a}\"\teadsf\nasdf");
            //MessageBox.Show($"\"{(num1+num2).ToString()}\"", "더한값");
            MessageBox.Show($"\"{num1-num2}\"");
            //MessageBox.Show((int.Parse(textBox1.Text) + int.Parse(textBox2.Text)).ToString(), "더한 값");
        }
    }
}
