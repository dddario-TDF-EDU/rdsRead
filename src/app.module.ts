import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AdvertisersModule } from './advertisers/advertisers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'rdscluster.c1ix9yjyr5xq.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'compartida123',
      database: 'dbcluster',
      entities: [__dirname + '/**/**/**.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    ProductsModule,
    AdvertisersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
