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
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string message = "Hello World!";
            int number = message.Length;
            MessageBox.Show($"number={number}");

            int a = 10;
            //MessageBox.Show(a.length); //length는 오직 string에만 사용 가능한 속성
        }

        private void button2_Click(object sender, EventArgs e)
        {
            MessageBox.Show(tb1.Text); // 값 가져오기
            tb1.Text = "Hello, world!"; //화면에 값 설정

            lb_lower.Text = tb1.Text.ToLower();
            lb_upper.Text = tb1.Text.ToUpper();

            string result = tb1.Text.Replace("world", "dog");

            MessageBox.Show(result);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            try
            {
                string result = int.Parse(tb_number.Text) % 2 == 0 ? "짝수" : "홀수";
                MessageBox.Show($"result = {result}");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"숫자를 입력하세요.");
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            try
            {
                int score = int.Parse(tb_score.Text);
                MessageBox.Show($"score = {score}");

                if (score < 100 && score >= 90)
                {
                    MessageBox.Show("점수는 A학점입니다.");
                    return;
                }
                else if (score < 90 && score >= 80)
                {
                    MessageBox.Show("점수는 B학점입니다.");
                    return;
                }
                else if (score < 80 && score >= 70)
                {
                    MessageBox.Show("점수는 C학점입니다.");
                    return;
                }
                else if (score < 70 && score >= 60)
                {
                    MessageBox.Show("점수는 D학점입니다.");
                    return;
                }
                else
                {
                    MessageBox.Show("점수는 F학점입니다.");
                    return;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"숫자를 입력하세요.");
                return;
            }
            finally
            {
                // 예외가 발생하든, 안 하든 항상 실행되는 코드,
                // 함수 종료 되어도 실행됨
                MessageBox.Show("점수 계산이 완료되었습니다.");
            }
        }
    }
}