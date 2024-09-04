import { type Options } from "@hey-api/client-fetch";
import type { SearchTemporaryEmploymentsData } from "./types.gen";
export declare const client: import("@hey-api/client-fetch").Client<Request, Response, import("@hey-api/client-fetch").RequestOptions>;
export declare class EmploymentService {
    static searchTemporaryEmployments<ThrowOnError extends boolean = false>(options?: Options<SearchTemporaryEmploymentsData, ThrowOnError>): import("@hey-api/client-fetch").RequestResult<void, unknown, ThrowOnError>;
}
