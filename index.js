const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("socialnetwork", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Tag = sequelize.define(
  "Tag",
  {
    // Атрибуты модели
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Другие модели
    tableName: "tags",
    timestamps: false,
  }
);

(async () => {
  try {
    await Tag.sync({
      alter: true,
      force: false,
    });

    // Добавление элемента
    //     const tag = await Tag.create({
    //       tag: "Сделано",
    //     });
    //     console.log("tag's aytogenerated ID:", tag.id);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();

    // Получение списка из таблицы (findAll c where)
    //     const tag = await Tag.findAll({
    //       where: {
    //         tag: "Разработка",
    //       }
    //       console.log(tag);
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();

    // Редактирование элемента
    //     const tag = await Tag.findOne({
    //       where: {
    //         tag: "Веб",
    //       }
    //       tags.tag = 'Вэб';
    //       tag.save();
    //       console.log(tag);
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();

    // Удаление элемента
    const tag = await Tag.findByPk(3);
    tag.destroy();
  } catch (error) {
    console.error(error);
  }
})();
