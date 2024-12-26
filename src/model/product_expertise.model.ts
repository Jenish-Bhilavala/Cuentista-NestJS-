import { MaxLength } from 'class-validator';
import {
  AllowNull,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Model,
  Sequelize,
  Table,
} from 'sequelize-typescript';
import { ProductModel } from './product.model';

@Table({ tableName: 'product_expertise' })
export class ProductExpertiseModel extends Model<ProductExpertiseModel> {
  @ForeignKey(() => ProductModel)
  @AllowNull(false)
  @Column
  product_id: number;

  @AllowNull(true)
  @MaxLength(255)
  @Column
  product_area?: string;

  @AllowNull(true)
  @MaxLength(255)
  @Column
  product_description?: string;

  @BelongsTo(() => ProductModel)
  product: ProductModel;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column({ type: 'TIMESTAMP' })
  createdAt: Date;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column({
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal(
      'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    ),
  })
  updatedAt: Date;
}
