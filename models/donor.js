module.exports = function(sequelize, DataTypes) {

  var DonorInfo = sequelize.define("DonorInfo", {

    name:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    address:  {
      type: DataTypes.STRING
    },
    city:  {
      type: DataTypes.STRING
    },
    state:  {
      type: DataTypes.STRING
    },
    zip:  {
      type: DataTypes.INTEGER
    },
    contact:  {
      type: DataTypes.STRING
    },
    // id from donorTypes table
    donorTypeId: {
      type: DataTypes.INTEGER
    },
    // id from foodTypes table
    foodTypesId:  {
      type: DataTypes.INTEGER
    },
    email:  {
      type: DataTypes.STRING
    },
    mobile:  {
      type: DataTypes.STRING
    },
    twitter: {
      type: DataTypes.STRING
    },
    instagram: {
      type: DataTypes.STRING
    },
    contactMobileFlag:  {
      type: DataTypes.BOOLEAN
    },
    contactEmailFlag: {
      type: DataTypes.BOOLEAN
    },  
    contactTwitterFlag: {
      type: DataTypes.BOOLEAN
    },
    contactInstagramFlag:{
      type: DataTypes.BOOLEAN
    },
    username:  {
      type: DataTypes.STRING
    },
    password:  {
      type: DataTypes.STRING
    }
  },
     {
      timestamps: false
    }

  );
/*
  CharityInfo.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
*/
  return DonorInfo;
};
