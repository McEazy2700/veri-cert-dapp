"use client";
import React from "react";
import { Provider } from "urql";
import { client } from "./client";

interface Props {
	children?: React.ReactNode;
}

const URQLProvider: React.FC<Props> = ({ children }) => {
	return <Provider value={client}>{children}</Provider>;
};

export default URQLProvider;
