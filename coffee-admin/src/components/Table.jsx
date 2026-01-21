import styles from '../styles/table.module.css';

const Table = ({ headers, data, renderRow }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>{renderRow(item)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
