const category = (sequelize,DataTypes)=>{

    const category = sequelize.define('category', {
        cate_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        cate_name: {
          type: DataTypes.STRING(150),
          allowNull: false
        },
        cate_cate_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'category',
            key: 'cate_id'
          }
        }
      }, {
        sequelize,
        tableName: 'category',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "category_pkey",
            unique: true,
            fields: [
              { name: "cate_id" },
            ]
          },
        ]
      });
      return category
    };
    
      

export default category
