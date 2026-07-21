import { expect, request, test } from "@playwright/test";

test("Create Product", async () => {
  // Create API Context
  const apiContext = await request.newContext({
    baseURL: "https://dummyjson.com",
  });

  // Request Body
  const requestBody = {
    title: "iPhone 16",
    price: 1200,
    stock: 50,
  };

  // Send Request
  const response = await apiContext.post("/products/add", {
    data: requestBody,
  });

  // Parse Response
  const responseBody = await response.json();

  // Assertions
  expect(response.status()).toBe(201);
  expect(responseBody.title).toBe("iPhone 16");
  expect(responseBody.price).toBe(1200);
  expect(responseBody.stock).toBe(50);
});
