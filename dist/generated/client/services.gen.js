// This file is auto-generated by @hey-api/openapi-ts
import { createClient, createConfig, } from "@hey-api/client-fetch";
export const client = createClient(createConfig());
export class EmploymentService {
    static searchTemporaryEmployments(options) {
        return (options?.client ?? client).get({
            ...options,
            url: "/v0/temporaryEmployment/search",
        });
    }
}
