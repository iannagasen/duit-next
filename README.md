### Custom Hook
Practice: useFetch
```tsx
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useDidUpdateEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(res => {
        setData(res);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  })

  return { data, loading, error }
}
```

```bash
npm install -D @hookform/devtools
```


