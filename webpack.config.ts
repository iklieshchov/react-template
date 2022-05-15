import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __prod__build__ = process.env.NODE_ENV === 'production';

const config: webpack.Configuration = {
  mode: __prod__build__ ? 'production' : 'development',
  devtool: __prod__build__ ? false : 'source-map',

  entry: {
    app: './projects/app/index.tsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main-[contenthash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    chunkFilename: '[name]-[contenthash].js'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.jpg'],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './projects/app/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ]
  },

  devServer: {
    static: './',
    hot: true,
    historyApiFallback: true,
  }
};

export default config;
