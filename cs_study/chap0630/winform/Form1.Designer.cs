namespace winform
{
    partial class Form1
    {
        /// <summary>
        /// 필수 디자이너 변수입니다.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 사용 중인 모든 리소스를 정리합니다.
        /// </summary>
        /// <param name="disposing">관리되는 리소스를 삭제해야 하면 true이고, 그렇지 않으면 false입니다.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form 디자이너에서 생성한 코드

        /// <summary>
        /// 디자이너 지원에 필요한 메서드입니다. 
        /// 이 메서드의 내용을 코드 편집기로 수정하지 마세요.
        /// </summary>
        private void InitializeComponent()
        {
            this.button1 = new System.Windows.Forms.Button();
            this.tb1 = new System.Windows.Forms.TextBox();
            this.button2 = new System.Windows.Forms.Button();
            this.lb_upper = new System.Windows.Forms.Label();
            this.lb_lower = new System.Windows.Forms.Label();
            this.button3 = new System.Windows.Forms.Button();
            this.tb_number = new System.Windows.Forms.TextBox();
            this.tb_score = new System.Windows.Forms.TextBox();
            this.button4 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.button1.Location = new System.Drawing.Point(286, 21);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(124, 62);
            this.button1.TabIndex = 0;
            this.button1.Text = "button1";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // tb1
            // 
            this.tb1.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.tb1.Location = new System.Drawing.Point(71, 78);
            this.tb1.Name = "tb1";
            this.tb1.Size = new System.Drawing.Size(175, 25);
            this.tb1.TabIndex = 1;
            this.tb1.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // button2
            // 
            this.button2.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.button2.Location = new System.Drawing.Point(286, 99);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(124, 53);
            this.button2.TabIndex = 2;
            this.button2.Text = "button2";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // lb_upper
            // 
            this.lb_upper.AutoSize = true;
            this.lb_upper.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.lb_upper.Location = new System.Drawing.Point(68, 135);
            this.lb_upper.Name = "lb_upper";
            this.lb_upper.Size = new System.Drawing.Size(47, 17);
            this.lb_upper.TabIndex = 3;
            this.lb_upper.Text = "대문자";
            // 
            // lb_lower
            // 
            this.lb_lower.AutoSize = true;
            this.lb_lower.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.lb_lower.Location = new System.Drawing.Point(68, 176);
            this.lb_lower.Name = "lb_lower";
            this.lb_lower.Size = new System.Drawing.Size(47, 17);
            this.lb_lower.TabIndex = 4;
            this.lb_lower.Text = "소문자";
            // 
            // button3
            // 
            this.button3.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.button3.Location = new System.Drawing.Point(286, 205);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(124, 50);
            this.button3.TabIndex = 5;
            this.button3.Text = "button3";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // tb_number
            // 
            this.tb_number.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.tb_number.Location = new System.Drawing.Point(71, 219);
            this.tb_number.Name = "tb_number";
            this.tb_number.Size = new System.Drawing.Size(175, 25);
            this.tb_number.TabIndex = 6;
            // 
            // tb_score
            // 
            this.tb_score.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.tb_score.Location = new System.Drawing.Point(71, 296);
            this.tb_score.Name = "tb_score";
            this.tb_score.Size = new System.Drawing.Size(175, 25);
            this.tb_score.TabIndex = 8;
            // 
            // button4
            // 
            this.button4.Font = new System.Drawing.Font("맑은 고딕", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.button4.Location = new System.Drawing.Point(286, 282);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(124, 50);
            this.button4.TabIndex = 7;
            this.button4.Text = "button4";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.tb_score);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.tb_number);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.lb_lower);
            this.Controls.Add(this.lb_upper);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.tb1);
            this.Controls.Add(this.button1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox tb1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Label lb_upper;
        private System.Windows.Forms.Label lb_lower;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.TextBox tb_number;
        private System.Windows.Forms.TextBox tb_score;
        private System.Windows.Forms.Button button4;
    }
}

