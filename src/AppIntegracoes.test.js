import { render, screen } from "@testing-library/react";
import React from "react";
import api from "./api";
import App from "./App";

jest.mock("./api");

describe("Requicições para API", () => {
  it("Exibir lista de transações através da API", async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        transacao: "saque",
        valor: "10",
        data: "03/02/2022",
        id: 1,
      },
      {
        transacao: "deposito",
        valor: "10",
        data: "03/02/2022",
        id: 2,
      },
    ]);

    render(<App />);

    expect(await screen.findByText("saque")).toBeInTheDocument();

    expect(screen.getByTestId("transacoes").children.length).toBe(2);
  });
});
