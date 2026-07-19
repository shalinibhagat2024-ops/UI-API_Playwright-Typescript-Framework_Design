import { ExecutionTimer } from "@api/core/logging/ExecutionTimer";
import { JsonFormatter } from "@api/core/logging/JsonFormatter";
import { Logger } from "@api/core/logging/Logger";
import { SensitiveDataMasker } from "@api/core/logging/SensitiveDataMasker";
import { RequestOptions } from "@api/core/RequestOptions";
import { ApiReportHelper } from "@core/reporting/api/ApiReportHelper";
import { ApiRequestMetadata } from "@core/reporting/metadata/ApiRequestMetadata";
import { ApiResponseMetadata } from "@core/reporting/metadata/ApiResponseMetadata";
import { APIRequestContext, APIResponse } from "@playwright/test";
import { ResponseParser } from "src/core/reporting/parser/ResponseParser";

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  public async get(endpoint: string, options?: RequestOptions): Promise<APIResponse> {
    return this.sendRequest("GET", endpoint, undefined, options);
  }

  public async post<TRequest>(
    endpoint: string,
    body: TRequest,
    options?: RequestOptions
  ): Promise<APIResponse> {
    return this.sendRequest("POST", endpoint, body, options);
  }

  public async put<TRequest>(
    endpoint: string,
    body: TRequest,
    options?: RequestOptions
  ): Promise<APIResponse> {
    return this.sendRequest("PUT", endpoint, body, options);
  }

  public async patch<TRequest>(
    endpoint: string,
    body: Partial<TRequest>,
    options?: RequestOptions
  ): Promise<APIResponse> {
    return this.sendRequest("PATCH", endpoint, body, options);
  }

  public async delete(endpoint: string, options?: RequestOptions): Promise<APIResponse> {
    return this.sendRequest("DELETE", endpoint, undefined, options);
  }

  private async sendRequest<TRequest>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    endpoint: string,
    body?: TRequest,
    options?: RequestOptions
  ): Promise<APIResponse> {
    const timer = new ExecutionTimer();

    const requestMetadata: ApiRequestMetadata = {
      method,
      endpoint,
      headers: options?.headers,
      queryParams: options?.queryParams,
      requestBody: body,
    };

    this.logRequest(requestMetadata);

    await ApiReportHelper.attachRequest(requestMetadata);

    try {
      const requestMetadata: ApiRequestMetadata = {
        method,

        endpoint,

        headers: options?.headers,

        queryParams: options?.queryParams,

        requestBody: body,
      };

      await ApiReportHelper.attachRequest(requestMetadata);

      const response = await this.request.fetch(endpoint, {
        method,
        data: body,
        headers: options?.headers,
        params: options?.queryParams,
        timeout: options?.timeout,
      });

      const duration = timer.stop();

      const responseBody = await ResponseParser.parse(response);

      const responseMetadata: ApiResponseMetadata = {
        status: response.status(),

        statusText: response.statusText(),

        duration,

        headers: response.headers(),

        contentType: response.headers()["content-type"] ?? "",

        responseBody,
      };

      // Log after creating metadata
      this.logResponse(responseMetadata);

      // Attach after logging
      await ApiReportHelper.attachResponse(responseMetadata);

      return response;
    } catch (error) {
      const duration = timer.stop();

      Logger.error("========================================");
      Logger.error("API REQUEST FAILED");
      Logger.error("========================================");
      Logger.error(`Method      : ${method}`);
      Logger.error(`Endpoint    : ${endpoint}`);
      Logger.error(`Duration    : ${duration} ms`);
      Logger.error(`Error       : ${String(error)}`);
      Logger.error("========================================");

      throw error;
    }
  }

  private logRequest(request: ApiRequestMetadata): void {
    Logger.info("========================================");
    Logger.info("API REQUEST");
    Logger.info("========================================");

    Logger.info(`Method      : ${request.method}`);
    Logger.info(`Endpoint    : ${request.endpoint}`);

    if (request.queryParams) {
      Logger.debug("Query Params");
      Logger.debug(JsonFormatter.format(request.queryParams));
    }

    if (request.headers) {
      Logger.debug("Headers");
      Logger.debug(JsonFormatter.format(SensitiveDataMasker.mask(request.headers)));
    }

    if (request.requestBody !== undefined) {
      Logger.debug("Request Body");
      Logger.debug(JsonFormatter.format(SensitiveDataMasker.mask(request.requestBody)));
    }

    Logger.info("========================================");
  }

  private logResponse(response: ApiResponseMetadata): void {
    Logger.info("========================================");
    Logger.info("API RESPONSE");
    Logger.info("========================================");
    Logger.info(`Status      : ${response.status}`);
    Logger.info(`Status Text : ${response.statusText}`);
    Logger.info(`Duration    : ${response.duration} ms`);

    Logger.debug("Headers");

    Logger.debug(JsonFormatter.format(response.headers));

    Logger.debug("Response Body");

    Logger.debug(JsonFormatter.format(SensitiveDataMasker.mask(response.responseBody)));

    Logger.info("========================================");
  }
}
