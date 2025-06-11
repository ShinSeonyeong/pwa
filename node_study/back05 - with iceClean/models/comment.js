const Sequelize = require("sequelize");

class Comment extends Sequelize.Model {
  static initiate(sequelize) {
    Comment.init(
      {
        comment: {
          type: Sequelize.STRING(100), // varchar(100)
          allowNull: false, // NOT NULL 제약조건
        },
        created_at: {
          type: Sequelize.DATE, // 날짜 타입
          allowNull: true,
          defaultValue: Sequelize.NOW, // 현재 시간으로 기본값 설정
        },
      },
      {
        sequelize,
        timestamps: false, // createdAt, updatedAt 자동 생성 방지
        underscored: false, // true로 설정하면 created_at, updated_at으로 컬럼명이 변경됨
        modelName: "Comment", // 모델 이름
        tableName: "comments", // 실제 테이블 이름
        paranoid: false, // true로 설정하면 deletedAt 컬럼이 추가되어 soft delete 기능 활성화
        charset: "utf8", // 문자 인코딩
        collate: "utf8_general_ci", // 문자 정렬 방식
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: "commenter", targetKey: "id" }); // User 모델과 Comment 모델의 관계 설정
  }
}

module.exports = Comment;
