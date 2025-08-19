import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const Statistics = () => {
    const allProducts = useLoaderData();

    // Transform data for the chart - extracting first letter of product name and price
    const chartData = allProducts?.map((product, index) => ({
        name: product.name ? product.name.charAt(0).toUpperCase() : 'P',
        price: product.price || 0,
        fullName: product.product_title,
        originalIndex: index
    })) || [];

    // Custom tooltip component
    const CustomTooltip = ({ active, payload  }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#9538E2] text-white p-3 rounded-lg shadow-lg border">
                    <p className="font-semibold">{`Product: ${payload[0].payload.name}`}</p>
                    <p className="text-yellow-200 font-bold">{`Price: $${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    // Custom bar colors - alternating purple shades
    const barColor = '#9538E2';

    return (
        <div className="min-h-screen bg-gray-50">
            <Helmet>
                <title>Gadget Vault | Statistics</title>
            </Helmet>
            
            {/* Header Section */}
            <div className="bg-[#9538E2] text-center text-white py-8 mx-4 lg:mx-12">
                <h1 className="text-2xl lg:text-3xl font-bold mb-3">Statistics</h1>
                <p className="text-gray-200 text-sm max-w-2xl mx-auto">
                    Explore comprehensive statistics and data visualization of our product catalog. 
                    View price distributions, product categories, and market trends.
                </p>
            </div>

            {/* Chart Section */}
            <div className="mx-4 lg:mx-12 my-8 bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Product Price Distribution</h2>
                    <p className="text-gray-600 text-sm">Product prices across different categories (Hover over bars for details)</p>
                </div>

                <div className="w-full h-96 lg:h-[500px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid 
                                strokeDasharray="3 3" 
                                stroke="#e5e7eb" 
                                opacity={0.7}
                            />
                            <XAxis 
                                dataKey="name" 
                                stroke="#6b7280"
                                fontSize={14}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis 
                                stroke="#6b7280"
                                fontSize={14}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip 
                                content={<CustomTooltip />}
                                cursor={{ fill: 'rgba(149, 56, 226, 0.1)' }}
                            />
                            <Bar 
                                dataKey="price" 
                                fill={barColor}
                                radius={[4, 4, 0, 0]}
                                maxBarSize={60}
                            >
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Stats Summary */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h3 className="text-lg font-semibold text-purple-800">Total Products</h3>
                        <p className="text-2xl font-bold text-purple-600">{chartData.length}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h3 className="text-lg font-semibold text-blue-800">Average Price</h3>
                        <p className="text-2xl font-bold text-blue-600">
                            ${chartData.length > 0 
                                ? (chartData.reduce((sum, item) => sum + item.price, 0) / chartData.length).toFixed(2)
                                : '0.00'
                            }
                        </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h3 className="text-lg font-semibold text-green-800">Highest Price</h3>
                        <p className="text-2xl font-bold text-green-600">
                            ${chartData.length > 0 
                                ? Math.max(...chartData.map(item => item.price)).toFixed(2)
                                : '0.00'
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;











 