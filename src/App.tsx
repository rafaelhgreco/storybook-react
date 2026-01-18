import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<div className="content">
				{/* Exemplo de div externa para testar o portal */}
				<div
					style={{ marginTop: "48px", padding: "24px", background: "#f5f5f5" }}
				>
					<h3>Área de Teste para Portal Externo</h3>
					<p>
						Adicione o ID "custom-portal-target" no campo acima para renderizar
						aqui:
					</p>
					<div
						id="custom-portal-target"
						style={{
							border: "2px solid #1976d2",
							borderRadius: "8px",
							padding: "16px",
							minHeight: "100px",
							background: "white",
						}}
					>
						{/* Componente será renderizado aqui via portal quando targetId for especificado */}
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
