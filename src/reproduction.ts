import { EmploymentService } from "./generated/client";
import * as clientFetch from "@hey-api/client-fetch";

const client = clientFetch.createClient({
  throwOnError: true,
});

await EmploymentService.searchTemporaryEmployments({
  client,
  query: {},
  // This has type
  // query?: (Record<string, unknown> & {
  //   limit?: number | undefined;
  // }) | undefined
  //
  // That is correct.

  path: { employeeIds: ["id"] },
  // This has type
  // path?: Record<string, unknown> | undefined
  //
  // Which means it's possible to pass parameters that look correct but are ignored
});
