import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { ThrottlerGuard } from "@nestjs/throttler";
import { TransformInterceptor } from "./common/interceptors/transform.interceptor";
import { LoggerModule } from "./common/logger/logger.module";
import AppConfiguration from "./config/app.config";
import AuthConfiguration from "./config/auth.config";
import DatabaseConfiguration from "./config/database.config";
import { DatabaseModule } from "./providers/database/mongo/database.module";
import { AuthModule } from "./security/auth/auth.module";
import { JwtAuthGuard } from "./security/auth/guards/jwt-auth.guard";
import { ThrottleModule } from "./security/throttle/throttle.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfiguration, DatabaseConfiguration, AuthConfiguration],
      ignoreEnvFile: false,
      isGlobal: true,
    }),
    DatabaseModule,
    LoggerModule,
    AuthModule,
    ThrottleModule,
    UsersModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
