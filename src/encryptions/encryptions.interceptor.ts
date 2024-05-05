import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';

export interface Response {
  successful: any;
  error_code: string;
  data: any;
}

@Injectable()
export class TransformationInterceptor<T>
  implements NestInterceptor<T, Response> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response> {
    return next.handle().pipe(
      map((data) => ({
        successful: true,
        error_code: '',
        data,
      })),
    );
  }
}

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) =>
        throwError(() => {
          const body = context.switchToHttp().getRequest().body;

          return new HttpException(
            {
              successful: false,
              error_code: err.response?.message,
              data: body,
            },
            err.status || 400,
          );
        }),
      ),
    );
  }
}
