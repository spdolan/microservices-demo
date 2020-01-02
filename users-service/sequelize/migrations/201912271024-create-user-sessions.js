module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      "userSessions",
      {
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
      },
      {
        charset: "utf8"
      }
    );
  };
  
  module.exports.down = queryInterface => queryInterface.dropTable("userSessions");